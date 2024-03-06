import React, { useState,useEffect } from 'react'
import mycontext from './MyContext'

import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection, collectionGroup, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';

function MyState(props) {
   const [mode, setmode] = useState('light');

   function toggleMode() {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(17,21,39)';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
   }

   const [loading, setLoading] = useState(false)

   const [products, setproducts] = useState({
    title:'',
    price:'',
    category : '',
    description : '',
    imgUrl : '',
    time: Timestamp.now(),
    date : new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

   })
  

// ************************ADD products SECTION****************
const addproducts = async()=>{
  if(products.title.trim() === '' || products.price.trim() === '' || products.imgUrl.trim() === ''|| products.description.trim() === '' ||
    products.category.trim() === ''){
      return toast.error("Please fill all the filled");
  }

    // const productsRef = collection(fireDB,'products');
    setLoading(true);
    try {
      const productsRef  = collection(fireDB,'products');
      await addDoc(productsRef,products);
      toast.success("products Added successfully");
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 800);
      getProduct();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
}
  

const [product, setproduct] = useState([]);

const getProduct = async()=>{
  
  setLoading(true);
  try {
    const q = query(collection(fireDB,'products'),orderBy('time'));

    const data = onSnapshot(q,(snapshot)=>{
      // console.log(data);
      let productArray = [];
      snapshot.forEach((doc)=>{
        productArray.push({...doc.data(),id:doc.id});
      });
      setproduct(productArray); 
      setLoading(false);
    })
    return ()=> data;
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
}

useEffect(() => {
  getProduct();
}, [])


// *******************UPDATE & DELETE PRODUCT FUNCTION*************
const edithandle = (item) =>{
  setproducts(item);
} 
const updateProduct = async(item) =>{
  setLoading(true);
  try {
    setLoading(false);
    await setDoc(doc(fireDB,"products",products.id),products)
    toast.success("product updated successfully");
    getProduct();
    setTimeout(() => {
      window.location.href='/dashboard'
    }, 800);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
  
} 

const deletProducts = async(item) =>{
  setLoading(true);
  try {
    await deleteDoc(doc(fireDB,"products",item.id));
    toast.success("Product deleted successfully");
    getProduct();
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
}

// ************************get Order from fireDB*********************
const [Order, setOrder] = useState([]);

const getOderData = async()=>{
  setLoading(true);
  try {
    const result = await getDocs(collection(fireDB,"orders"),Order);
    const orderArr = [] ;
    result.forEach((doc)=>{
      orderArr.push(doc.data());
      setLoading(false);
    })
    setOrder(orderArr);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
}

// ******************getting user's from fireDB************
const [user, setUser] = useState([])
const getUser = async() =>{
  setLoading(true);
  try {
    const result = await getDocs(collection(fireDB,"users"));
    const userArr = [];
    result.forEach((doc)=>{
      userArr.push(doc.data());
    })
    setUser(userArr);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
}

useEffect(() => {
  getOderData();
  getUser();
},[])

const [searchKey, setSearchKey] = useState('')
const [filterType, setFilterType] = useState('')
const [filterPrice, setFilterPrice] = useState('')

  return (
    // if there are two or more state for context api then value should be passed like below like object
    <mycontext.Provider value={{mode,toggleMode,loading,setLoading,products,setproducts,product,addproducts,
     edithandle, updateProduct,deletProducts,Order,getOderData,user,searchKey,setSearchKey,filterType,setFilterType,filterPrice,setFilterPrice}}>
      {props.children}
    </mycontext.Provider>
  )
}

export default MyState
