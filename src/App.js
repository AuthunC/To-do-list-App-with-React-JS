import AddItems from './AddItems';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import Search from './Search';
// http://localhost:3500/items

function App() {
  const API_URL="http://localhost:3500/items";
  const [items,setItems]=useState([]);
  const [newItem, setNewItem] = useState('')
  const [search,setSearch] =useState('')
  const [fetchError,setFetchError]=useState(null)
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    // JSON.parse(localStorage.getItem('todo-list'))},[]
    const fetchItems=async()=>{
      try{
        const response= await fetch(API_URL)
        if(!response.ok) throw Error("Data not received");
        const listItems=await response.json();
        setItems(listItems)
        setFetchError(null)
      }
      catch(err){
        setFetchError(err.message);
      }
      finally{
        setIsLoading(false)
      }
    }
    setTimeout(()=>{
      (async () => await fetchItems())()
    },2000)
  }, [])
  const handleChange = (id) =>{
      const listItems = items.map((item)=>
      item.id===id ? {...item, checked:!item.checked}: item)
      setItems(listItems)
      // localStorage.setItem("todo-list",JSON.stringify(listItems))
  }
  const handleDelete = (id) =>{
      const listItems = items.filter((item)=>
      item.id!==id)
      setItems(listItems)
      // localStorage.setItem("todo-list",JSON.stringify(listItems))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem);
    addItem(newItem)
    setNewItem('')
  }

  const addItem =(item) => {
    const id=items.length ? items[items.length -1].id+1 : 1;
    const addNewItem={id,checked:false,item}
    const listItems=[...items, addNewItem]
    setItems(listItems)
    // localStorage.setItem('todo-list', JSON.stringify(listItems))
  }
  return(
    <div>
      <Header title="Authun's to-do list"/>
      <AddItems 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Search 
      search={search}
      setSearch={setSearch}
      />
      <main>
        {isLoading && <p> Loading items...</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError &&  <Body 
          items={items.filter(item =>((item.item)).toLowerCase().includes(search.toLowerCase()))}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;
