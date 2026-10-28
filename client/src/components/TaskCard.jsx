function TaskCard({title,due}){
    return(
        <div className="rounded-lg bg-white p-4 shadow">
            <h2 className="font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">Due: {due}</p>
        </div>
    );
}
export default TaskCard;