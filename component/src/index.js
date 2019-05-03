import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ComponentDetail from './ComponentDetail';
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">

    <ApprovalCard>
      <div>
        <h4>Warnig message!</h4>
        Are you sure , you want to do this
      </div>
    </ApprovalCard>
    <ApprovalCard>
      <ComponentDetail author="Abc" timeago="Today at 6am" content="svdf" avatar= {faker.image.avatar()}/>
    </ApprovalCard>
    <ApprovalCard>
      <ComponentDetail author="pqr" timeago="Today at 2pm" content="dgjhfg" avatar = {faker.image.avatar()}/>
    </ApprovalCard>
    <ApprovalCard>
      <ComponentDetail author="xyz" timeago="Yesterday at 6pm" content="fgng" avatar = {faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
