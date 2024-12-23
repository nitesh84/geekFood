import styles from "./Search.module.css";
const Search = () => {
  const {mBtn1,mBtn2}=styles;
  return (
    <>
        <main>
            <h1>Let us find your</h1>
            <h1><span>Forever Food.</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>Nesciunt illo tenetur fuga ducimus numquam ea!</p>
            <button className={`${mBtn1} btn`} >Search Now</button>
            <button className={`${mBtn2} btn`}>Know more</button>
        </main>
    </>
  )
}

export default Search