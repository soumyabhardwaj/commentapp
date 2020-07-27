import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./commentdetail";
import ApprovalCard  from "./approvalcard"



const App = () => {
    return (
        <div className="ui container comments">
         <ApprovalCard>
           <CommentDetail author="sam" 
            timeAgo="Today at 6:00Pm"
             Blogpost="whoa!" 
             avatar={faker.image.avatar()}
             />
          </ApprovalCard>   

          <ApprovalCard>
            <CommentDetail author="alex" 
            timeAgo="Today at 4:45 pm" 
            Blogpost="amazing man"
            avatar={faker.image.avatar()}
            />

         </ApprovalCard>

         <ApprovalCard>
           <CommentDetail author="meow"
           timeAgo="Yesterday at 5:00Pm"
            Blogpost="nice post "
            avatar={faker.image.avatar()}
            />
         </ApprovalCard>

          <ApprovalCard>
           <CommentDetail author="nonie"
            timeAgo="yesterday at 3:00AM"
             Blogpost="informative"
             avatar={faker.image.avatar()}
             /> 
          </ApprovalCard>
           
        </div>
    );



};



ReactDom.render(<App />, document.querySelector('#root'))
