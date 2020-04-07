import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

const NewTodoListUI = props => {
  return (
    <div style={{ marginTop: 20, marginLeft: 20 }}>
      <div>
        <Input
          value={props.inputValue}
          placeholder="todo"
          onChange={props.handleInputChange}
          style={{ width: "300px" }}
        ></Input>
        <Button
          type="primary"
          onClick={props.handleBtnClick}
          style={{ marginLeft: 20 }}
        >
          Sumbit
        </Button>
      </div>

      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleDeleteItem(index);
            }}
          >
            {item}
          </List.Item>
        )}
        style={{ marginTop: 20 }}
      />
    </div>
  );
};

// class NewTodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: 20, marginLeft: 20 }}>
//         <div>
//           <Input
//             value={this.props.inputValue}
//             placeholder="todo"
//             onChange={this.props.handleInputChange}
//             style={{ width: "300px" }}
//           ></Input>
//           <Button
//             type="primary"
//             onClick={this.props.handleBtnClick}
//             style={{ marginLeft: 20 }}
//           >
//             Sumbit
//           </Button>
//         </div>

//         <List
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               onClick={index => {
//                 this.props.handleDeleteItem(index);
//               }}
//             >
//               {item}
//             </List.Item>
//           )}
//           style={{ marginTop: 20 }}
//         />
//       </div>
//     );
//   }
// }

export default NewTodoListUI;
