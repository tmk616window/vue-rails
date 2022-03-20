import React, { useEffect, useContext, useState } from "react";
import {getTasks} from '../src/api/task/GetTasks'
import Image from 'next/image'
import Logo from '../img/logo.png'
import {Task, ProlLanguage} from '../src/type/interfaces'
import Link from 'next/link';
import {displayImage} from '../src/api/common/DisplayImage'
import  {api}  from '../src/contexts/api'
import { useRouter } from "next/router";

export const  TaskList = () => {
  const router = useRouter();
  const taskId = Number(router.query.id)
  const[tasks, setTasks] = useState<any>([])
  useEffect( () => {
    (async() => {
      const gtasks = await getTasks()
      if(gtasks.status == 200) {
        setTasks(gtasks.data.tasks)
      }
    })()
  }, []);

  return (
    <div >
    <ul className="list-group">
      {tasks.map((task:Task ,index:number)=> (
        <Link href={{ pathname: '/task', query: { id: task.id } }}>
        <li key={index} className="list-group-item list-group-item-primary list-item" >
          <div className="item-image">
            {/* <img src={displayImage(`https://enjob.work/${task.logoImage?.url}`)} alt="..." width = "250" height="250" className="logo-image" /> */}
          </div>
          <div className="item-content">
            <h1>{task.title}</h1>
            <p>ポートフォリオ概要</p>
            <p className="description">{task.details}</p>
            <p>使用技術</p>
            <div className="langArticle">
            {task.pro_languages.map((proLanguages:ProlLanguage ,index:number)=> (  
              <span className="article" key={index}>{proLanguages.language}</span>
            ))}
            </div>
          </div>
        </li>
        </Link>
      ))}
    </ul>
  </div>
);
  }

export default TaskList;
