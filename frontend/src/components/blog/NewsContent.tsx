import styles from '../../styles/NewsContent.module.css';

const NewsContent = () => {

    return (
        <div className={styles.container}>
            <Heading />
            <Thumbnail />
            <Texts />
        </div>
    );
}

export default NewsContent;

const Heading = () => {
    return (
        <div className={styles.heading}>
            <h1>Bringing the Future of Education to Brazil with Khan Academy and Khanmigo</h1>
            <h4>POSTED ON JUNE 06, 2024</h4>
        </div>
    );
}

const Thumbnail = () => {
    return (
        <div className={styles.thumbnailWrapper}>
            <img src='https://blog.khanacademy.org/wp-content/uploads/2024/05/1024-x-637-680x290.png' alt='featured news' />
        </div>
    );
}

const Texts = () => {
    return (
        <div className={styles.textWrapper}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit at, minima asperiores accusamus natus voluptates a consequuntur aliquid molestias eaque eum inventore amet cum corporis! At vitae doloribus accusantium voluptates unde asperiores hic, recusandae earum quisquam, eius vel molestias minus qui similique accusamus illo odit cupiditate, soluta iusto illum expedita adipisci. Officiis natus odio, hic aspernatur optio sequi voluptas cumque vel nihil reprehenderit? Excepturi natus architecto explicabo, dolores adipisci id reiciendis! Totam non ex sed. Accusantium quae qui quas impedit placeat reprehenderit error illum quam doloremque voluptatum quidem illo dolore, voluptas veniam voluptate voluptates atque. Beatae quaerat, nesciunt cumque asperiores eum hic rem cum, iure dolorem eveniet ea quibusdam dolorum. Voluptatem dolore quam nemo reprehenderit fugiat assumenda unde sit cupiditate deleniti soluta. Atque voluptatum eius, asperiores nisi, corporis tempora explicabo voluptatibus iusto voluptate doloremque temporibus perferendis placeat illum, deleniti quasi? Magni veritatis praesentium vitae! Quia eligendi repellat nihil earum quis, nesciunt maiores non natus delectus itaque ratione veritatis reiciendis architecto! Tenetur, ut sequi? Neque sed velit, non doloremque et voluptatibus porro libero eveniet officia dolore, nihil beatae laboriosam illum quasi, quis quas. Optio fugit voluptatum vitae ut earum nobis recusandae blanditiis, sint dolor nam quasi atque esse, laudantium distinctio. Assumenda ut cumque nostrum voluptatem quibusdam dolore, repellendus, harum expedita minus beatae ipsam illo distinctio eos neque amet fuga sit suscipit non hic rem! Amet asperiores doloremque impedit obcaecati corrupti porro dolorum, illo voluptas molestiae vitae id mollitia similique. Deserunt porro delectus, facilis eum aperiam ducimus deleniti impedit quaerat illum repudiandae sapiente, rerum vitae et dolor nihil eius. Velit, porro. Eveniet ipsam, suscipit velit enim ab blanditiis itaque alias cumque repellat quo tenetur minima maxime tempora voluptatum magni reprehenderit culpa! Quam, cum. Repellat delectus, eligendi soluta ratione repudiandae, aliquid unde corrupti numquam quaerat ullam culpa doloribus consectetur, expedita quae vitae.</p>
        </div>
    );
}