import logoUrl from "../assets/logo.png";

export function AdminNav() {
  return (
    <nav className="nav adminNav">
      <div className="navin adminNavInner">
        <div className="brand">
          <img src={logoUrl} alt="The Anchor Collective logo" />
          <span>THE ANCHOR ADMIN</span>
        </div>
      </div>
    </nav>
  );
}
