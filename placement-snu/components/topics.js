import React from "react";
import Card from "./Card";

import styles from "../styles/topics.module.css";

/*import image1 from "../images/img-1.jpg";
import image2 from "../images/img-2.jpg";
import image3 from "../images/img-4.jpg";*/

function Topics() 
{
  return (
    <div className="cards">
      <h1>Question Bank according to Topics</h1>
      <div className={styles.cards__container}>
        <div className={styles.cards__wrapper}>
          <ul className={styles.cards__items}>
      
          <Card
            title="Arrays"
            description="1D, 2D, sorting, subarrays"
            link="/array">
          </Card>
         
          <Card
            title="Linked List"
            description="traveral, node, arraylist"                         
            link="/linkedList">
          </Card>

          <Card
            title="Binary Tree"
            description="BST, inorder, mirror tree"                      
            link="/binaryTree">
          </Card>
        
                         
          </ul>
          <ul className={styles.cards__items}>
      
      <Card
        title="Stacks"
        description="LIFO, Queue, cyclic, pointer"
        link="/stack">
      </Card>
     
      <Card
        title="Strings"
        description="char, duplicate, file"                         
        link="/string">
      </Card>

      <Card
        title="Graph"
        description="BFS, DFS, Adjacency list"                      
        link="/graph">
      </Card>
    
                     
      </ul>
        </div>
      </div>
    </div>
  );
};

export default Topics;
