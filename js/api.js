const fetchProducts = async () =>{
try {
    const res = await fetch('../db.json');

    

    const data = await res.json();
    
    
    return data;
} catch (error) {
    alert(`Error: ${error}`);

    return [];
}
};

export default fetchProducts;