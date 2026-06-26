export function ModuleCard({ module, value }) {
  return (
    <div className="card">
      <div className="icon">{value}</div>
      <h3>{module.title}</h3>
      <p>{module.body}</p>
    </div>
  );
}
