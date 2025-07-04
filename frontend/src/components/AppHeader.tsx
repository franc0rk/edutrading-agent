const Header = () => {
  return (
    <header className="px-4 py-6">
      <div className="mx-auto container">
        <p className="text-2xl font-bold text-slate-800">
          <img
            src="/logo-header.png"
            alt="EduTrading Agent Logo"
            style={{ height: 64 }}
          />
        </p>
      </div>
    </header>
  );
};

export default Header;
