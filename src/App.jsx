
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia.jsx";
import Timer from "./components/Timer.jsx";
import Start from "./components/Start.jsx";

function App() {
  const [userName , setUserName] = useState(null);
  const [questionNumber , setQuestionNumber] = useState(1);
  const [stop ,setStop]=useState(false);
  const [earn ,setEarn]=useState("$ 0");

  const data = [
    {
      id : 1 ,
      question : "Which god is also known as 'Gauri Nandan' ?",
      answers :[
        {
          text : "Hanuman",correct : false ,
        },
        {
          text : "Ganesha",correct : true ,
        },
        {
          text : "Agni",correct : false ,
        },
        {
          text : "Indra",correct : false ,
        },
      ],
    },
    {
      id : 2 ,
      question : "Who wrote Vande Mataram ?",
      answers :[
        {
          text : "Sarat Chandra Chattopadhyay",correct : false ,
        },
        {
          text : "Bankim Chandra Chatterjee",correct : true ,
        },
        {
          text : "Ishwar Chandra Vidyasagar",correct : false ,
        },
        {
          text : "Rabindranath Tagore",correct : false ,
        },
      ]
    },
    {
      id : 3 ,
      question : "Which of the following is not a state of India?",
      answers :[
        {
          text : "Jharkhand",correct : false ,
        },
        {
          text : "Goa",correct : false ,
        },
        {
          text : "Vrindachal",correct : true ,
        },
        {
          text : "Chattisgath",correct : false ,
        },
      ]
    },
    {
      id : 4 ,
      question : "How do you say Hello in India?",
      answers :[
        {
          text : "Namaste",correct : true ,
        },
        {
          text : "Neeche",correct : false ,
        },
        {
          text : "Chor",correct : false ,
        },
        {
          text : "Ladki",correct : false ,
        },
      ]
    },
    {
      id : 5 ,
      question : "Taj Mahal was made of ?",
      answers :[
        {
          text : "Sandstone",correct : false ,
        },
        {
          text : "Brick",correct : false ,
        },
        {
          text : "Marble",correct : true ,
        },
        {
          text : "Granite",correct : false ,
        },
      ]
    },
    {
      id : 6 ,
      question : "How many states are there in India?",
      answers :[
        {
          text : "28",correct : true ,
        },
        {
          text : "29",correct : false ,
        },
        {
          text : "31",correct : false ,
        },
        {
          text : "32",correct : false ,
        },
      ]
    },
    {
      id : 7 ,
      question : "Who was the first Indian woman to win a medal in the Olympics ?",
      answers :[
        {
          text : "Bachendri Pal",correct : false ,
        },
        {
          text : "Karnam Maleshwari",correct : true ,
        },
        {
          text : "Kunjarani Devi",correct : false ,
        },
        {
          text : "P.T. Usha",correct : false ,
        },
      ]
    },
    {
      id : 8 ,
      question : "When is the National Hindi Diwas celebrated?",
      answers :[
        {
          text : "14 September",correct : true ,
        },
        {
          text : "14 July",correct : false ,
        },
        {
          text : "13 September",correct : false ,
        },
        {
          text : "15 August",correct : false ,
        },
      ]
    },
    {
      id : 9 ,
      question : "Which city is known as Pink City in India?",
      answers :[
        {
          text : "Banglore",correct : false ,
        },
        {
          text : "Jalgaon",correct : true ,
        },
        {
          text : "Jaipur",correct : false ,
        },
        {
          text : "kochi",correct : false ,
        },
      ]
    },
    {
      id : 10 ,
      question : "जळगाव जिल्ह्याचे एकूण क्षेत्रफळ किती आहे?",
      answers :[
        {
          text : "11465 चौ.की.मी",correct : false ,
        },
        {
          text : "11565 चौ.की.मी.",correct : false ,
        },
        {
          text : "11665 चौ.की.मी",correct : false ,
        },
        {
          text : " 11765 चौ.की.मी.",correct : true ,
        },
      ]
    },
    {
      id : 11 ,
      question : "खालीलपैकी कोणती नदी जळगाव जिल्ह्यातून वाहत नाही ?",
      answers :[
        {
          text : "तापी",correct : false ,
        },
        {
          text : "पूर्णा",correct : false ,
        },
        {
          text : "कोयना",correct : true ,
        },
        {
          text : " गिरणा",correct : false ,
        },
      ]
    },
    {
      id : 12 ,
      question : "जळगाव जिल्ह्याला महाराष्ट्रातील किती जिल्ह्यांच्या सीमा लागून आहेत ?",
      answers :[
        {
          text : "3",correct : true ,
        },
        {
          text : "4",correct : false ,
        },
        {
          text : "5",correct : false ,
        },
        {
          text : " 6",correct : false ,
        },
      ]
    },
    {
      id : 13 ,
      question : "जळगाव जिल्ह्याचे पूर्वीचे नाव काय होते?",
      answers :[
        {
          text : "धाराशिव",correct : false ,
        },
        {
          text : "कुलाबा",correct : false ,
        },
        {
          text : "खानदेश",correct : true ,
        },
        {
          text : " मोमिनाबाद",correct : false ,
        },
      ]
    },
    {
      id : 14,
      question : "जळगाव जिल्हा कोणत्या वर्षी तयार झाला आहे ?",
      answers :[
        {
          text : "1906",correct : true ,
        },
        {
          text : "1998",correct : false ,
        },
        {
          text : "1982",correct : false ,
        },
        {
          text : "1990",correct : false ,
        },
      ]
    },
    {
      id : 15 ,
      question : " जळगाव जिल्ह्यातील जिल्ह्यातील कोणते फळाचे पीक सर्वात जास्त प्रमाणात घेतले जाते?",
      answers :[
        {
          text : "केळी",correct : true ,
        },
        {
          text : "मोसंबी",correct : false ,
        },
        {
          text : "संत्रा",correct : false ,
        },
        {
          text : " डाळिंब",correct : false ,
        },
      ]
    }

  ];
  const moneyPyramid = useMemo(()=>
    [
      {id:1 , amount:"Rs 100"},
      {id:2 , amount:"Rs 200"},
      {id:3 , amount:"Rs 300"},
      {id:4 , amount:"Rs 500"},
      {id:5 , amount:"Rs 1000"},
      {id:6 , amount:"Rs 2000"},
      {id:7 , amount:"Rs 4000"},
      {id:8 , amount:"Rs 8000"},
      {id:9 , amount:"Rs 16000"},
      {id:10 , amount:"Rs 32000"},
      {id:11 , amount:"Rs 64000"},
      {id:12 , amount:"Rs 125000"},
      {id:13 , amount:"Rs 250000"},
      {id:14 , amount:"Rs 500000"},
      {id:15 , amount:"Rs 1000000"},
    ].reverse(),
      []
    );

  useEffect(()=>{
    questionNumber>1 && setEarn(moneyPyramid.find((m)=>m.id === questionNumber -1).amount);
  },[moneyPyramid,questionNumber]);

  return (
    <div className="App">
      {userName ? (
        <> 
          <div className="main">
          {stop ? <h1 className="endText">You Earned : {earn}</h1>:(
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              < Trivia data={data} 
                      setStop={setStop}
                      questionNumber = {questionNumber}
                      setQuestionNumber={setQuestionNumber}
              />
              </div>
            </>
          )}
          
        </div>
        
        
        <div className="pyramid">
          <ul className="moneyList"> 
          <h1 className="paise">  Paisa </h1>
          <h1>-----------------------------------</h1>
            {moneyPyramid.map((m)=>(
              <li className={questionNumber === m.id ? "moneyListItem active ": "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))}
          <h1>-----------------------------------</h1>
            

          </ul>
        </div>
        </>
      ) : <Start setUserName={setUserName} />}
      
    </div>
  );
}

export default App;
