import styles from "../styles/share.module.scss";
import { useState } from "react";
import { db } from "../utils/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Share({ user }) {
  const username = JSON.parse(user).name;
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    year: "",
    content: "",
    name: username,
  });

  async function handleForm(e) {
    e.preventDefault();
    const expCollectionRef = collection(db, "Experience");
    try {
      //   await addDoc(expCollectionRef, {
      //     name: formData.name,
      //     title: formData.title,
      //     comapny: formData.company,
      //     year: formData.year,
      //     content: formData.content,
      //   });

      const res = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        window.location.href = "/experiences";
      } else {
        console.log("Could add data");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.FormWrapper}>
        <form onSubmit={handleForm} className={styles.Form}>
          <p>Title</p>
          <input
            required
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          ></input>
          <p>Company</p>
          <input
            required
            name="company"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          ></input>
          <p>Year</p>
          <input
            required
            type="number"
            min="2000"
            max="2022"
            step="1"
            name="year"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          ></input>
          <p>Share your interview experience here</p>
          <textarea
            required
            name="content"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          ></textarea>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
