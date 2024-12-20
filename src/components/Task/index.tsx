/* eslint-disable @typescript-eslint/no-explicit-any */
import { TimeOutline } from "react-ionicons";
import { Task as TaskType } from "../../types";
import { formatDate } from "../../utils/formatDate";
import { useTaskContext } from "../../context/TaskContext";

interface TaskProps {
	task: TaskType;
	provided: any;
}

const Task = ({ task, provided }: TaskProps) => {
	const { title, description, priority, duedate, completed } = task;
	const { state } = useTaskContext();

	return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="w-full cursor-grab bg-[#fff] flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4"
    >
      {/* <div className="flex items-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag.title}
            className="px-[10px] py-[2px] text-[13px] font-medium rounded-md"
            style={{ backgroundColor: tag.bg, color: tag.text }}
          >
            {tag.title}
          </span>
        ))}
      </div> */}
      <div className="w-full flex items-start flex-col gap-0">
        <span className={`text-[16px] font-semibold text-gray-900 ${completed ? 'line-through' : ''}`}>{title}</span>
        <span className={`text-[14px] font-medium text-gray-500 ${completed ? 'line-through' : ''}`}>
          {description}
        </span>
      </div>
      <div className="w-full border border-solid"></div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <TimeOutline color={"#666"} width="19px" height="19px" />
          <span className={`text-[13px] text-gray-700 ${completed ? 'line-through' : ''}`}>
		  	{formatDate(new Date(task.duedate))}
          </span>
        </div>
        <div
          className={`w-[60px] rounded-full h-[5px] ${
            priority === "high"
              ? "bg-red-500"
              : priority === "medium"
              ? "bg-red-300"
              : "bg-red-100"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Task;

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { TimeOutline } from "react-ionicons";
// import { Task as TaskType } from "../../types";
// import { formatDate } from "../../utils/formatDate";

// interface TaskProps {
// 	task: TaskType;
// 	provided: any;
// }

// const Task = ({ task, provided }: TaskProps) => {
// 	const { title, description, priority } = task;

// 	return (
//     <div
//       ref={provided.innerRef}
//       {...provided.draggableProps}
//       {...provided.dragHandleProps}
//       className="w-full cursor-grab bg-[#fff] flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4"
//     >
//       {/* <div className="flex items-center gap-2">
//         {tags.map((tag) => (
//           <span
//             key={tag.title}
//             className="px-[10px] py-[2px] text-[13px] font-medium rounded-md"
//             style={{ backgroundColor: tag.bg, color: tag.text }}
//           >
//             {tag.title}
//           </span>
//         ))}
//       </div> */}
//       <div className="w-full flex items-start flex-col gap-0">
//         <span className="text-[16px] font-semibold text-gray-900">{title}</span>
//         <span className="text-[14px] font-medium text-gray-500">
//           {description}
//         </span>
//       </div>
//       <div className="w-full border border-solid"></div>
//       <div className="w-full flex items-center justify-between">
//         <div className="flex items-center gap-1">
//           <TimeOutline color={"#666"} width="19px" height="19px" />
//           <span className="text-[13px] text-gray-700">
// 		  	{formatDate(new Date(task.duedate))}
//           </span>
//         </div>
//         <div
//           className={`w-[60px] rounded-full h-[5px] ${
//             priority === "high"
//               ? "bg-red-500"
//               : priority === "medium"
//               ? "bg-red-300"
//               : "bg-red-100"
//           }`}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Task;
