function MobileLayout({ children }) {
  return (
    <div className="app-shell">
      <main className="mobile-container">{children}</main>
    </div>
  );
}

export default MobileLayout;
