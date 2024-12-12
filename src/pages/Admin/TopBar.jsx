export default function TopBar() {
    const logout = () => {
        localStorage.removeItem('authToken');
        sessionStorage.clear();
        window.location.href = '/';
    };
    return (
        <nav>
            <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-20">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Vocab</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <button onClick={logout} className="btn btn-error ml-4">
                        Log Out
                    </button>
                </div>
            </div>
        </nav>
    )
}
