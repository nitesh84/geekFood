import React from 'react'
import styles from "./Reviews.module.css"
const Reviews = () => {
  return (
    <div className={styles.reviewContainer}>
        <div className={styles.reviewCard}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.</p>
            <div className={styles.imgHolder} >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CIalceqzPVwB4E4IySgQJDYQCchMbALjNg&s" alt="Profile_Pic" />
                <div className="pHolder">
                    <p>Gladis Lennon</p>
                    <p>Head of SEO</p>
                </div>
            </div>
        </div>
        <div className={styles.reviewCard}>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.</p>
            <div className={styles.imgHolder}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CIalceqzPVwB4E4IySgQJDYQCchMbALjNg&s" alt="Profile_Pic" />
                <div className={styles.pHolder}>
                    <p>Gladis Lennon</p>
                    <p>Head of SEO</p>
                </div> 
            </div>
        </div>
        <div className={styles.reviewCard}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.</p>
            <div className={styles.imgHolder}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CIalceqzPVwB4E4IySgQJDYQCchMbALjNg&s" alt="Profile_Pic" />
                <div className={styles.pHolder}>
                <p>Gladis Lennon</p>
                <p>Head of SEO</p>
                </div>
            </div>
        </div>
        <div className={styles.reviewCard}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.</p>
            <div className={styles.imgHolder}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CIalceqzPVwB4E4IySgQJDYQCchMbALjNg&s" alt="Profile_Pic" />
                <div className={styles.pHolder}>

                <p>Gladis Lennon</p>
                <p>Head of SEO</p>
                </div>
            </div>
        </div>
        <div className={styles.reviewCard}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!</p>
            <div className={styles.imgHolder}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CIalceqzPVwB4E4IySgQJDYQCchMbALjNg&s" alt="Profile_Pic" />
                <div className={styles.pHolder}>

                <p>Gladis Lennon</p>
                <p>Head of SEO</p>
                </div>
            </div>
        </div>
        <div className={styles.reviewCard}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.</p>
            <div className={styles.imgHolder}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CIalceqzPVwB4E4IySgQJDYQCchMbALjNg&s" alt="Profile_Pic" />
                <div className={styles.pHolder}>

                <p>Gladis Lennon</p>
                <p>Head of SEO</p>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Reviews