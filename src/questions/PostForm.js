
import axios from 'axios'
import './postbutton.css'
import { useState } from 'react'

export const PostForm = (props) => {
  const { author, url } = props;
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const currentDate = new Date();
  const creationTime = currentDate.toISOString();

  const [data, setData] = useState({
    author: author,
    description: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    subject: "",
    topic: '',
    answer: "",
    level: "",
  });

  const submit = (e) => {
    e.preventDefault();
    axios.post(url, {
      author: data.author,
      description: data.description,
      optionOne: data.optionOne,
      optionTwo: data.optionTwo,
      optionThree: data.optionThree,
      optionFour: data.optionFour,
      subject: data.subject,
      topic: data.topic,
      answer: parseInt(data.answer),
      level: data.level,
      creationTime: creationTime,
    })
    .then(res => {
        console.log(res.data);
        document.getElementById("output").textContent = "Posted Question Successfully";
        document.getElementById("output").style.color = "green";
        setData({
          author: author,
          description: "",
          optionOne: "",
          optionTwo: "",
          optionThree: "",
          optionFour: "",
          subject: "",
          topic: "",
          answer: "",
          level: "",
        });
        document.getElementById("description").value = "";
        document.getElementById("optionOne").value = "";
        document.getElementById("optionTwo").value = "";
        document.getElementById("optionThree").value = "";
        document.getElementById("optionFour").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("topic").value = "";
        document.getElementById("level").value = "";
        document.getElementById("answer").value = "";

        // Show the success message for 2 seconds
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 2000);
      })
      .catch(err => {
        console.log(err);
        document.getElementById("output").textContent = "Failed to Post Question";
        document.getElementById("output").style.color = "red";
      });
  };

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    document.getElementById("output").textContent = "";
    console.log(newdata);
  }

  return (
    <div>
      <div id="form" className='form1'>
        <form onSubmit={(e) => submit(e)}>
          <label>Description:<span>*</span></label>
          <textarea required="required" onChange={(e) => handle(e)} id='description' defaultValue={data.description} />

          <label>Option 1:<span>*</span></label>
          <input onChange={(e) => handle(e)} required="required" id='optionOne' defaultValue={data.optionOne} placeholder="optionone" type="text" />
          <label>Option 2:<span>*</span></label>
          <input onChange={(e) => handle(e)} required="required" id='optionTwo' defaultValue={data.optionTwo} placeholder="Optiontwo" type="text" />
          <label>Option 3:</label>
          <input onChange={(e) => handle(e)} id='optionThree' defaultValue={data.optionThree} placeholder="option3" type="text" />
          <label>Option 4:</label>
          <input onChange={(e) => handle(e)} id='optionFour' defaultValue={data.optionFour} placeholder="optionfour" type="text" />
          <label>Subject:<span>*</span></label>
          <input onChange={(e) => handle(e)} required="required" id='subject' defaultValue={data.subject} placeholder="Subject" type="text" />
          <label>Topic:<span>*</span></label>
          <input onChange={(e) => handle(e)} id='topic' required="required" defaultValue={data.topic} placeholder="topic" type="text" />
          <label>Level:<span>*</span></label>
          <input onChange={(e) => handle(e)} id='level' required="required" defaultValue={data.level} placeholder="level" type="text" />
          <label>Answer:<span>*</span></label>
          <input onChange={(e) => handle(e)} id='answer' required="required" defaultValue={data.answer} placeholder="answer" type="number" />

          <p id='output'>{showSuccessMessage ? "Posted Question Successfully" : ""}</p>
          <button>Post Question</button>
        </form>
      </div>
    </div>
  )
}
