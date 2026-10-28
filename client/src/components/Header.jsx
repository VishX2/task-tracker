function Header(){
    const today = new Date().toDateString();
    return(
        <header className="bg-indigo-600 p-6 text-white">
            <h1 className="text-3xl font-bold">Task Tracker</h1>
            <p className="text-indigo-200">{today}</p>
        </header>

    );
}
export default Header;