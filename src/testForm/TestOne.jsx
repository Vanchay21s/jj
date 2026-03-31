import { useState, useRef } from "react";

// ─── Mock Data ──────────────────────────────────────────────────────────────
const mockWorks = [
  {
    id: 1,
    name: "E-Commerce Platform",
    position: "1",
    image: null,
    github: "https://github.com/example/ecommerce",
    demo: "https://demo.example.com",
    framework: "Next.js",
    description: "A full-featured e-commerce platform with cart, checkout and payment integration.",
    created_at: "2024-01-15",
    images: [],
    technologies: [
      { id: 1, name: "Frontend", by_work: 1, tools: [{ id: 1, name: "React" }, { id: 2, name: "Tailwind CSS" }] },
      { id: 2, name: "Backend", by_work: 1, tools: [{ id: 3, name: "Node.js" }, { id: 4, name: "PostgreSQL" }] },
    ],
    key_features: [
      { id: 1, name: "Real-time Cart", description: "Instant cart updates without page reload.", by_work: 1 },
      { id: 2, name: "Auth System", description: "JWT-based secure authentication.", by_work: 1 },
    ],
  },
  {
    id: 2,
    name: "Portfolio CMS",
    position: "2",
    image: null,
    github: "https://github.com/example/cms",
    demo: "",
    framework: "Express.js",
    description: "Content management system for developer portfolios with media uploads.",
    created_at: "2024-03-10",
    images: [],
    technologies: [],
    key_features: [],
  },
];

// ─── Styles ──────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0a0f;
    --surface: #111118;
    --surface2: #18181f;
    --border: #252530;
    --border2: #2e2e3a;
    --accent: #7c6dfa;
    --accent2: #a78bfa;
    --green: #34d399;
    --red: #f87171;
    --yellow: #fbbf24;
    --text: #e8e8f0;
    --text2: #9090a8;
    --text3: #5a5a72;
    --radius: 10px;
    --font-heading: 'Syne', sans-serif;
    --font-mono: 'DM Mono', monospace;
  }

  body { background: var(--bg); color: var(--text); font-family: var(--font-mono); min-height: 100vh; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 99px; }

  /* ── Layout ── */
  .app { display: flex; flex-direction: column; min-height: 100vh; }
  .header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 32px; height: 56px;
    background: var(--surface); border-bottom: 1px solid var(--border);
    position: sticky; top: 0; z-index: 100;
  }
  .header-logo { font-family: var(--font-heading); font-weight: 800; font-size: 17px; color: var(--accent2); letter-spacing: -0.5px; }
  .header-logo span { color: var(--text3); font-weight: 400; }
  .header-badge { font-size: 11px; color: var(--text3); background: var(--surface2); border: 1px solid var(--border); padding: 3px 10px; border-radius: 99px; }

  /* ── Page 1 ── */
  .page1 { display: flex; flex: 1; height: calc(100vh - 56px); overflow: hidden; }

  .work-list-panel {
    width: 320px; min-width: 280px; max-width: 340px;
    border-right: 1px solid var(--border);
    display: flex; flex-direction: column;
    background: var(--surface);
    overflow: hidden;
  }
  .panel-header {
    padding: 18px 20px 14px;
    border-bottom: 1px solid var(--border);
    display: flex; align-items: center; justify-content: space-between;
  }
  .panel-title { font-family: var(--font-heading); font-weight: 700; font-size: 13px; color: var(--text2); text-transform: uppercase; letter-spacing: 1.5px; }
  .work-list { flex: 1; overflow-y: auto; padding: 10px; }
  .work-item {
    padding: 14px 14px 12px;
    border-radius: var(--radius); cursor: pointer;
    border: 1px solid transparent;
    margin-bottom: 6px;
    transition: all 0.15s ease;
    position: relative; overflow: hidden;
  }
  .work-item:hover { background: var(--surface2); border-color: var(--border); }
  .work-item.active { background: color-mix(in srgb, var(--accent) 10%, var(--surface2)); border-color: var(--accent); }
  .work-item-name { font-family: var(--font-heading); font-weight: 600; font-size: 14px; color: var(--text); margin-bottom: 4px; }
  .work-item-meta { display: flex; gap: 8px; align-items: center; }
  .badge { font-size: 10px; padding: 2px 8px; border-radius: 99px; font-weight: 400; }
  .badge-fw { background: color-mix(in srgb, var(--accent) 15%, transparent); color: var(--accent2); border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent); }
  .badge-pos { background: color-mix(in srgb, var(--green) 12%, transparent); color: var(--green); border: 1px solid color-mix(in srgb, var(--green) 25%, transparent); }
  .work-item-date { font-size: 10px; color: var(--text3); }
  .work-item-arrow { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: var(--text3); font-size: 12px; opacity: 0; transition: opacity 0.15s; }
  .work-item:hover .work-item-arrow, .work-item.active .work-item-arrow { opacity: 1; color: var(--accent); }
  .empty-list { padding: 40px 20px; text-align: center; color: var(--text3); font-size: 13px; }

  /* ── Form Panel ── */
  .form-panel { flex: 1; overflow-y: auto; background: var(--bg); padding: 32px 36px; }
  .form-heading { font-family: var(--font-heading); font-weight: 800; font-size: 22px; color: var(--text); margin-bottom: 4px; }
  .form-sub { font-size: 12px; color: var(--text3); margin-bottom: 28px; }

  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
  .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 0; }
  .form-group.full { grid-column: 1 / -1; }
  .form-label { font-size: 11px; color: var(--text3); text-transform: uppercase; letter-spacing: 1px; }
  .form-input, .form-textarea, .form-select {
    background: var(--surface); border: 1px solid var(--border);
    color: var(--text); border-radius: var(--radius);
    padding: 10px 14px; font-family: var(--font-mono); font-size: 13px;
    outline: none; transition: border-color 0.15s, background 0.15s;
    width: 100%;
  }
  .form-input:focus, .form-textarea:focus, .form-select:focus { border-color: var(--accent); background: var(--surface2); }
  .form-textarea { resize: vertical; min-height: 90px; }
  .form-select option { background: var(--surface); }

  /* Image Upload */
  .upload-zone {
    border: 1.5px dashed var(--border2); border-radius: var(--radius);
    padding: 28px 20px; text-align: center; cursor: pointer;
    transition: all 0.2s; background: var(--surface);
  }
  .upload-zone:hover { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 5%, var(--surface)); }
  .upload-zone.drag-over { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, var(--surface)); }
  .upload-icon { font-size: 28px; margin-bottom: 8px; }
  .upload-text { font-size: 12px; color: var(--text2); }
  .upload-sub { font-size: 11px; color: var(--text3); margin-top: 4px; }
  .image-preview-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: 8px; margin-top: 12px; }
  .image-thumb {
    aspect-ratio: 1; border-radius: 8px; overflow: hidden; position: relative;
    background: var(--surface2); border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
  }
  .image-thumb img { width: 100%; height: 100%; object-fit: cover; }
  .image-thumb-remove {
    position: absolute; top: 4px; right: 4px;
    background: rgba(0,0,0,0.7); color: var(--red); border: none; cursor: pointer;
    border-radius: 99px; width: 20px; height: 20px; font-size: 12px;
    display: flex; align-items: center; justify-content: center;
  }
  .image-thumb-name { font-size: 9px; color: var(--text3); padding: 4px; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  /* Buttons */
  .btn {
    display: inline-flex; align-items: center; gap: 7px;
    padding: 9px 18px; border-radius: 8px; font-family: var(--font-mono);
    font-size: 12px; cursor: pointer; border: none; transition: all 0.15s; font-weight: 400;
  }
  .btn-primary { background: var(--accent); color: #fff; }
  .btn-primary:hover { background: var(--accent2); transform: translateY(-1px); }
  .btn-ghost { background: transparent; color: var(--text2); border: 1px solid var(--border2); }
  .btn-ghost:hover { background: var(--surface2); color: var(--text); border-color: var(--border2); }
  .btn-green { background: color-mix(in srgb, var(--green) 15%, transparent); color: var(--green); border: 1px solid color-mix(in srgb, var(--green) 30%, transparent); }
  .btn-green:hover { background: color-mix(in srgb, var(--green) 25%, transparent); }
  .btn-red { background: color-mix(in srgb, var(--red) 12%, transparent); color: var(--red); border: 1px solid color-mix(in srgb, var(--red) 25%, transparent); }
  .btn-red:hover { background: color-mix(in srgb, var(--red) 22%, transparent); }
  .btn-sm { padding: 6px 12px; font-size: 11px; }
  .form-actions { display: flex; gap: 10px; margin-top: 24px; }

  /* ── Page 2 ── */
  .page2 { flex: 1; overflow-y: auto; padding: 32px 40px; max-width: 900px; margin: 0 auto; width: 100%; }
  .back-btn { display: inline-flex; align-items: center; gap: 6px; color: var(--text3); font-size: 12px; cursor: pointer; margin-bottom: 24px; border: none; background: none; padding: 0; transition: color 0.15s; }
  .back-btn:hover { color: var(--accent2); }

  .work-header-card {
    background: var(--surface); border: 1px solid var(--border); border-radius: 14px;
    padding: 28px; margin-bottom: 24px;
  }
  .work-header-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; }
  .work-title-area .work-page-title { font-family: var(--font-heading); font-weight: 800; font-size: 26px; color: var(--text); }
  .work-title-area .work-page-sub { font-size: 12px; color: var(--text3); margin-top: 4px; }

  /* Sections */
  .section { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 24px; margin-bottom: 20px; }
  .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px solid var(--border); }
  .section-title { font-family: var(--font-heading); font-weight: 700; font-size: 14px; color: var(--text); display: flex; align-items: center; gap: 8px; }
  .section-icon { width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; }
  .icon-tech { background: color-mix(in srgb, var(--accent) 15%, transparent); }
  .icon-feat { background: color-mix(in srgb, var(--yellow) 15%, transparent); }
  .icon-img { background: color-mix(in srgb, var(--green) 15%, transparent); }

  /* Technology Cards */
  .tech-list { display: flex; flex-direction: column; gap: 12px; }
  .tech-card { background: var(--surface2); border: 1px solid var(--border); border-radius: 10px; padding: 14px 16px; }
  .tech-card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
  .tech-card-name { font-family: var(--font-heading); font-weight: 600; font-size: 13px; color: var(--text); }
  .tools-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; }
  .tool-chip { background: color-mix(in srgb, var(--accent) 12%, transparent); color: var(--accent2); border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent); padding: 4px 10px; border-radius: 99px; font-size: 11px; display: flex; align-items: center; gap: 5px; }
  .tool-chip-remove { background: none; border: none; cursor: pointer; color: inherit; opacity: 0.6; font-size: 11px; padding: 0; line-height: 1; }
  .tool-chip-remove:hover { opacity: 1; }
  .tool-add-row { display: flex; gap: 8px; margin-top: 8px; }
  .tool-input { background: var(--bg); border: 1px solid var(--border); color: var(--text); border-radius: 7px; padding: 7px 11px; font-family: var(--font-mono); font-size: 12px; outline: none; flex: 1; }
  .tool-input:focus { border-color: var(--accent); }

  /* Feature Cards */
  .feature-list { display: flex; flex-direction: column; gap: 10px; }
  .feature-card { background: var(--surface2); border: 1px solid var(--border); border-radius: 10px; padding: 14px 16px; }
  .feature-card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
  .feature-name { font-family: var(--font-heading); font-weight: 600; font-size: 13px; color: var(--text); }
  .feature-desc { font-size: 12px; color: var(--text2); line-height: 1.5; }

  /* Inline edit inputs */
  .inline-input { background: var(--bg); border: 1px solid var(--border); color: var(--text); border-radius: 7px; padding: 6px 10px; font-family: var(--font-mono); font-size: 12px; outline: none; width: 100%; }
  .inline-input:focus { border-color: var(--accent); }
  .inline-textarea { background: var(--bg); border: 1px solid var(--border); color: var(--text); border-radius: 7px; padding: 6px 10px; font-family: var(--font-mono); font-size: 12px; outline: none; width: 100%; resize: vertical; min-height: 60px; }
  .inline-textarea:focus { border-color: var(--accent); }

  /* Divider */
  .divider { border: none; border-top: 1px solid var(--border); margin: 16px 0; }

  /* Toast */
  .toast {
    position: fixed; bottom: 28px; right: 28px; z-index: 999;
    background: var(--surface2); border: 1px solid var(--green);
    color: var(--green); padding: 12px 20px; border-radius: 10px;
    font-size: 13px; display: flex; align-items: center; gap: 8px;
    animation: slideUp 0.25s ease;
  }
  @keyframes slideUp { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform: translateY(0); } }

  /* Empty state */
  .empty-section { text-align: center; padding: 28px 0; color: var(--text3); font-size: 12px; }

  /* Responsive */
  @media (max-width: 700px) {
    .page1 { flex-direction: column; height: auto; }
    .work-list-panel { width: 100%; max-width: 100%; border-right: none; border-bottom: 1px solid var(--border); max-height: 260px; }
    .form-grid { grid-template-columns: 1fr; }
    .page2 { padding: 20px 16px; }
  }
`;

// ─── Toast ───────────────────────────────────────────────────────────────────
function Toast({ msg }) {
  return <div className="toast">✓ {msg}</div>;
}

// ─── Page 1 ──────────────────────────────────────────────────────────────────
function Page1({ works, setWorks, onSelectWork }) {
  const [selectedId, setSelectedId] = useState(null);
  const [form, setForm] = useState({
    name: "", position: "", github: "", demo: "",
    framework: "", description: "",
  });
  const [images, setImages] = useState([]);
  const [drag, setDrag] = useState(false);
  const [toast, setToast] = useState(null);
  const fileRef = useRef();

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2200); };

  const handleImg = (files) => {
    const newImgs = Array.from(files).map(f => ({
      file: f, preview: URL.createObjectURL(f),
      originalname: f.name, size: f.size,
    }));
    setImages(prev => [...prev, ...newImgs]);
  };

  const reset = () => { setForm({ name:"",position:"",github:"",demo:"",framework:"",description:"" }); setImages([]); setSelectedId(null); };

  const handleSubmit = () => {
    if (!form.name.trim()) return alert("Name is required");
    const newWork = {
      id: Date.now(), ...form,
      images: images.map(i => ({ originalname: i.originalname, preview: i.preview, size: i.size })),
      created_at: new Date().toISOString().split("T")[0],
      technologies: [], key_features: [],
    };
    setWorks(prev => [...prev, newWork]);
    showToast("Work created successfully");
    reset();
  };

  const handleSelect = (work) => {
    setSelectedId(work.id);
    onSelectWork(work);
  };

  return (
    <div className="page1">
      {/* Left: Work List */}
      <div className="work-list-panel">
        <div className="panel-header">
          <span className="panel-title">Works</span>
          <span style={{fontSize:11,color:"var(--text3)"}}>{works.length} items</span>
        </div>
        <div className="work-list">
          {works.length === 0 && <div className="empty-list">No works yet.<br/>Add one on the right →</div>}
          {works.map(w => (
            <div
              key={w.id}
              className={`work-item${selectedId === w.id ? " active" : ""}`}
              onClick={() => handleSelect(w)}
            >
              <div className="work-item-name">{w.name}</div>
              <div className="work-item-meta">
                {w.framework && <span className="badge badge-fw">{w.framework}</span>}
                {w.position && <span className="badge badge-pos">#{w.position}</span>}
              </div>
              <div className="work-item-date" style={{marginTop:5}}>{w.created_at}</div>
              <span className="work-item-arrow">→</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Add Work Form */}
      <div className="form-panel">
        <div className="form-heading">Add New Work</div>
        <div className="form-sub">Fill in the details to create a new portfolio work</div>

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Project Name *</label>
            <input className="form-input" value={form.name} onChange={e => setForm(p=>({...p,name:e.target.value}))} placeholder="My Awesome Project" />
          </div>
          <div className="form-group">
            <label className="form-label">Position / Order</label>
            <input className="form-input" type="number" value={form.position} onChange={e => setForm(p=>({...p,position:e.target.value}))} placeholder="1" />
          </div>
          <div className="form-group">
            <label className="form-label">Framework</label>
            <input className="form-input" value={form.framework} onChange={e => setForm(p=>({...p,framework:e.target.value}))} placeholder="Next.js, React, Express..." />
          </div>
          <div className="form-group">
            <label className="form-label">Demo URL</label>
            <input className="form-input" value={form.demo} onChange={e => setForm(p=>({...p,demo:e.target.value}))} placeholder="https://..." />
          </div>
          <div className="form-group full">
            <label className="form-label">GitHub URL</label>
            <input className="form-input" value={form.github} onChange={e => setForm(p=>({...p,github:e.target.value}))} placeholder="https://github.com/..." />
          </div>
          <div className="form-group full">
            <label className="form-label">Description</label>
            <textarea className="form-textarea" value={form.description} onChange={e => setForm(p=>({...p,description:e.target.value}))} placeholder="Brief description of the project..." />
          </div>

          {/* Image Upload */}
          <div className="form-group full">
            <label className="form-label">Project Images</label>
            <div
              className={`upload-zone${drag ? " drag-over" : ""}`}
              onDragOver={e => { e.preventDefault(); setDrag(true); }}
              onDragLeave={() => setDrag(false)}
              onDrop={e => { e.preventDefault(); setDrag(false); handleImg(e.dataTransfer.files); }}
              onClick={() => fileRef.current.click()}
            >
              <div className="upload-icon">🖼</div>
              <div className="upload-text">Drop images here or click to upload</div>
              <div className="upload-sub">PNG, JPG, WEBP accepted</div>
              <input ref={fileRef} type="file" multiple accept="image/*" style={{display:"none"}} onChange={e => handleImg(e.target.files)} />
            </div>
            {images.length > 0 && (
              <div className="image-preview-grid">
                {images.map((img, i) => (
                  <div key={i} className="image-thumb">
                    <img src={img.preview} alt={img.originalname} />
                    <button className="image-thumb-remove" onClick={() => setImages(prev => prev.filter((_,j)=>j!==i))}>×</button>
                    <div className="image-thumb-name">{img.originalname}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" onClick={handleSubmit}>＋ Create Work</button>
          <button className="btn btn-ghost" onClick={reset}>Reset</button>
        </div>
      </div>
      {toast && <Toast msg={toast} />}
    </div>
  );
}

// ─── Page 2 ──────────────────────────────────────────────────────────────────
function Page2({ work, works, setWorks, onBack }) {
  const [data, setData] = useState({ ...work });
  const [toast, setToast] = useState(null);
  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2200); };

  // Sync data when work changes
  const updateMain = (field, val) => setData(p => ({ ...p, [field]: val }));

  const saveWork = () => {
    setWorks(prev => prev.map(w => w.id === data.id ? data : w));
    showToast("Work updated");
  };

  // ── Technologies ──
  const addTechnology = () => {
    const newTech = { id: Date.now(), name: "New Technology", by_work: data.id, tools: [] };
    setData(p => ({ ...p, technologies: [...p.technologies, newTech] }));
  };
  const updateTechName = (techId, name) => {
    setData(p => ({ ...p, technologies: p.technologies.map(t => t.id===techId ? {...t, name} : t) }));
  };
  const removeTech = (techId) => {
    setData(p => ({ ...p, technologies: p.technologies.filter(t => t.id!==techId) }));
  };

  // ── Technology Tools ──
  const [toolInputs, setToolInputs] = useState({});
  const addTool = (techId) => {
    const val = (toolInputs[techId] || "").trim();
    if (!val) return;
    const newTool = { id: Date.now(), name: val, by_technology: techId };
    setData(p => ({
      ...p,
      technologies: p.technologies.map(t =>
        t.id === techId ? { ...t, tools: [...(t.tools||[]), newTool] } : t
      )
    }));
    setToolInputs(p => ({ ...p, [techId]: "" }));
  };
  const removeTool = (techId, toolId) => {
    setData(p => ({
      ...p,
      technologies: p.technologies.map(t =>
        t.id === techId ? { ...t, tools: (t.tools||[]).filter(to => to.id!==toolId) } : t
      )
    }));
  };

  // ── Key Features ──
  const addFeature = () => {
    const newF = { id: Date.now(), name: "New Feature", description: "", by_work: data.id };
    setData(p => ({ ...p, key_features: [...p.key_features, newF] }));
  };
  const updateFeature = (featId, field, val) => {
    setData(p => ({ ...p, key_features: p.key_features.map(f => f.id===featId ? {...f,[field]:val} : f) }));
  };
  const removeFeature = (featId) => {
    setData(p => ({ ...p, key_features: p.key_features.filter(f => f.id!==featId) }));
  };

  return (
    <div className="page2">
      <button className="back-btn" onClick={onBack}>← Back to works</button>

      {/* Work Info Card */}
      <div className="work-header-card">
        <div className="work-header-top">
          <div className="work-title-area">
            <div className="work-page-title">{data.name || "Untitled Work"}</div>
            <div className="work-page-sub">ID: {data.id} · Created: {data.created_at}</div>
          </div>
          <button className="btn btn-primary" onClick={saveWork}>Save Changes</button>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Project Name</label>
            <input className="form-input" value={data.name} onChange={e => updateMain("name", e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Position</label>
            <input className="form-input" type="number" value={data.position} onChange={e => updateMain("position", e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Framework</label>
            <input className="form-input" value={data.framework} onChange={e => updateMain("framework", e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Demo URL</label>
            <input className="form-input" value={data.demo} onChange={e => updateMain("demo", e.target.value)} />
          </div>
          <div className="form-group full">
            <label className="form-label">GitHub</label>
            <input className="form-input" value={data.github} onChange={e => updateMain("github", e.target.value)} />
          </div>
          <div className="form-group full">
            <label className="form-label">Description</label>
            <textarea className="form-textarea" value={data.description} onChange={e => updateMain("description", e.target.value)} />
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="section">
        <div className="section-header">
          <div className="section-title">
            <span className="section-icon icon-tech">⚙️</span>
            Technologies
            <span style={{fontFamily:"var(--font-mono)",fontWeight:400,fontSize:12,color:"var(--text3)"}}>({data.technologies.length})</span>
          </div>
          <button className="btn btn-green btn-sm" onClick={addTechnology}>＋ Add Technology</button>
        </div>

        {data.technologies.length === 0 && <div className="empty-section">No technologies yet. Click "Add Technology" to start.</div>}
        <div className="tech-list">
          {data.technologies.map(tech => (
            <div key={tech.id} className="tech-card">
              <div className="tech-card-header">
                <input
                  className="inline-input"
                  style={{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:13}}
                  value={tech.name}
                  onChange={e => updateTechName(tech.id, e.target.value)}
                />
                <button className="btn btn-red btn-sm" style={{marginLeft:10,whiteSpace:"nowrap"}} onClick={() => removeTech(tech.id)}>Remove</button>
              </div>

              <div style={{fontSize:11,color:"var(--text3)",marginBottom:8,textTransform:"uppercase",letterSpacing:"0.8px"}}>Tools</div>
              <div className="tools-row">
                {(tech.tools||[]).map(tool => (
                  <div key={tool.id} className="tool-chip">
                    {tool.name}
                    <button className="tool-chip-remove" onClick={() => removeTool(tech.id, tool.id)}>×</button>
                  </div>
                ))}
                {(tech.tools||[]).length === 0 && <span style={{fontSize:11,color:"var(--text3)"}}>No tools yet</span>}
              </div>

              <div className="tool-add-row">
                <input
                  className="tool-input"
                  placeholder="Add tool name..."
                  value={toolInputs[tech.id] || ""}
                  onChange={e => setToolInputs(p => ({...p,[tech.id]:e.target.value}))}
                  onKeyDown={e => { if(e.key==="Enter") addTool(tech.id); }}
                />
                <button className="btn btn-ghost btn-sm" onClick={() => addTool(tech.id)}>＋ Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Section */}
      <div className="section">
        <div className="section-header">
          <div className="section-title">
            <span className="section-icon icon-feat">✦</span>
            Key Features
            <span style={{fontFamily:"var(--font-mono)",fontWeight:400,fontSize:12,color:"var(--text3)"}}>({data.key_features.length})</span>
          </div>
          <button className="btn btn-green btn-sm" onClick={addFeature}>＋ Add Feature</button>
        </div>

        {data.key_features.length === 0 && <div className="empty-section">No key features yet. Click "Add Feature" to describe what makes this work special.</div>}
        <div className="feature-list">
          {data.key_features.map(feat => (
            <div key={feat.id} className="feature-card">
              <div className="feature-card-header">
                <input
                  className="inline-input"
                  style={{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:13,flex:1}}
                  value={feat.name}
                  placeholder="Feature name..."
                  onChange={e => updateFeature(feat.id, "name", e.target.value)}
                />
                <button className="btn btn-red btn-sm" style={{marginLeft:10,whiteSpace:"nowrap"}} onClick={() => removeFeature(feat.id)}>Remove</button>
              </div>
              <textarea
                className="inline-textarea"
                value={feat.description}
                placeholder="Describe this feature..."
                onChange={e => updateFeature(feat.id, "description", e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Images Section */}
      {(data.images||[]).length > 0 && (
        <div className="section">
          <div className="section-header">
            <div className="section-title">
              <span className="section-icon icon-img">🖼</span>
              Project Images
            </div>
          </div>
          <div className="image-preview-grid">
            {data.images.map((img, i) => (
              <div key={i} className="image-thumb" style={{aspectRatio:"4/3"}}>
                {img.preview ? <img src={img.preview} alt={img.originalname} /> : <span style={{fontSize:11,color:"var(--text3)"}}>No preview</span>}
                <div className="image-thumb-name">{img.originalname}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {toast && <Toast msg={toast} />}
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [works, setWorks] = useState(mockWorks);
  const [page, setPage] = useState(1);
  const [selectedWork, setSelectedWork] = useState(null);

  const handleSelectWork = (work) => {
    setSelectedWork(work);
    setPage(2);
  };

  const handleBack = () => {
    setPage(1);
    setSelectedWork(null);
  };

  // Keep selectedWork in sync with works array
  const syncedWork = selectedWork ? works.find(w => w.id === selectedWork.id) || selectedWork : null;

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <header className="header">
          <div className="header-logo">work<span>.</span>manager</div>
          <div style={{display:"flex",gap:10,alignItems:"center"}}>
            <button className={`btn btn-ghost btn-sm${page===1?" active":""}`} onClick={handleBack} style={page===1?{borderColor:"var(--accent)",color:"var(--accent)"}:{}}>
              Page 1 — Works
            </button>
            {selectedWork && (
              <button className={`btn btn-ghost btn-sm${page===2?" active":""}`} style={page===2?{borderColor:"var(--accent)",color:"var(--accent)"}:{}}>
                Page 2 — {syncedWork?.name}
              </button>
            )}
            <span className="header-badge">PostgreSQL · REST API</span>
          </div>
        </header>

        {page === 1 && (
          <Page1
            works={works}
            setWorks={setWorks}
            onSelectWork={handleSelectWork}
          />
        )}
        {page === 2 && syncedWork && (
          <Page2
            work={syncedWork}
            works={works}
            setWorks={setWorks}
            onBack={handleBack}
          />
        )}
      </div>
    </>
  );
}

