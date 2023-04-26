import './Pagination.css'
const Pagination =({onPageClick,totalPage}) =>{
return ( 
    <div className="pagination">
        {
        Array.from(Array(totalPage),(e,i)=>{
            return(
                <a onClick={()=>onPageClick(i+1)}>{i+1}</a>
            ) 
        }) }
    </div>
)
}

export default Pagination