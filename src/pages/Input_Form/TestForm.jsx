import { useState } from "react";

const SKILLS = [
  "React.js", "Express.js", "MongoDB", "PostgreSQL",
  "Tailwind CSS", "Node.js", "TypeScript", "GraphQL",
  "Docker", "Redis", "Next.js", "Vue.js",
  "Python", "Django", "FastAPI", "MySQL",
];

const RATINGS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const SKILL_COLORS = {
  "React.js": "#61DAFB", "Express.js": "#68A063", "MongoDB": "#47A248",
  "PostgreSQL": "#336791", "Tailwind CSS": "#38BDF8", "Node.js": "#8CC84B",
  "TypeScript": "#3178C6", "GraphQL": "#E535AB", "Docker": "#2496ED",
  "Redis": "#DC382D", "Next.js": "#E2E8F0", "Vue.js": "#4FC08D",
  "Python": "#FFD43B", "Django": "#44B78B", "FastAPI": "#009688", "MySQL": "#4479A1",
};

const getInitials = (name) => name?.split(".")[0]?.slice(0, 2).toUpperCase() || "??";

const SkillCard = ({ skill, onEdit, onDelete }) => {
  const color = SKILL_COLORS[skill.name] || "#7C6AF7";

  return (
    <div style={styles.card}>
      <div style={{ ...styles.cardStripe, background: color }} />
      <div style={styles.cardTop}>
        <div style={{
          ...styles.avatar,
          background: `linear-gradient(135deg, ${color}18, ${color}35)`,
          border: `1px solid ${color}44`,
        }}>
          {skill.image ? (
            <img src={skill.image} alt={skill.name} style={styles.avatarImg} />
          ) : (
            <span style={{ ...styles.avatarText, color }}>{getInitials(skill.name)}</span>
          )}
        </div>
        <div style={styles.cardInfo}>
          <span style={styles.cardName}>{skill.name}</span>
          <div style={styles.ratingTrack}>
            <div style={{ ...styles.ratingFill, width: `${skill.rating}%`, background: color }} />
          </div>
          <span style={{ ...styles.ratingLabel, color }}>{skill.rating}%</span>
        </div>
      </div>
      <div style={styles.cardActions}>
        <button style={styles.editBtn} onClick={() => onEdit(skill)}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          Edit
        </button>
        <button style={styles.deleteBtn} onClick={() => onDelete(skill.id)}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6"/><path d="M14 11v6"/>
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
};

export default function TestForm() {
  const [skills, setSkills] = useState([
    { id: 1, name: "React.js", rating: 90, image: null },
    { id: 2, name: "PostgreSQL", rating: 70, image: null },
    { id: 3, name: "Docker", rating: 60, image: null },
  ]);
  const [form, setForm] = useState({ name: "", rating: "", image: null, imagePreview: null });
  const [editId, setEditId] = useState(null);
  const [notification, setNotification] = useState(null);

  const notify = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 2500);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setForm((f) => ({ ...f, image: file, imagePreview: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!form.name || !form.rating) return notify("Please fill all required fields.", "error");
    if (editId !== null) {
      setSkills((s) => s.map((sk) =>
        sk.id === editId ? { ...sk, name: form.name, rating: Number(form.rating), image: form.imagePreview } : sk
      ));
      notify(`"${form.name}" updated!`);
      setEditId(null);
    } else {
      setSkills((s) => [...s, { id: Date.now(), name: form.name, rating: Number(form.rating), image: form.imagePreview }]);
      notify(`"${form.name}" added!`);
    }
    setForm({ name: "", rating: "", image: null, imagePreview: null });
  };

  const handleEdit = (skill) => {
    setEditId(skill.id);
    setForm({ name: skill.name, rating: String(skill.rating), image: null, imagePreview: skill.image });
  };

  const handleDelete = (id) => {
    const sk = skills.find((s) => s.id === id);
    setSkills((s) => s.filter((s) => s.id !== id));
    if (editId === id) { setEditId(null); setForm({ name: "", rating: "", image: null, imagePreview: null }); }
    notify(`"${sk?.name}" removed.`, "info");
  };

  const handleCancel = () => {
    setEditId(null);
    setForm({ name: "", rating: "", image: null, imagePreview: null });
  };

  const accentColor = form.name ? (SKILL_COLORS[form.name] || "#7C6AF7") : "#7C6AF7";

  return (
    <div style={styles.root}>
      {/* Toast */}
      {notification && (
        <div style={{
          ...styles.toast,
          background: notification.type === "error" ? "#FF4D4D18" : notification.type === "info" ? "#7C6AF718" : "#4ADE8018",
          borderColor: notification.type === "error" ? "#FF4D4D66" : notification.type === "info" ? "#7C6AF766" : "#4ADE8066",
          color: notification.type === "error" ? "#FF7777" : notification.type === "info" ? "#9988FF" : "#4ADE80",
        }}>
          {notification.msg}
        </div>
      )}

      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerLeft}>
            <span style={styles.tag}>Portfolio Manager</span>
            <h1 style={styles.title}>Skills<span style={styles.dot}>.</span></h1>
            <p style={styles.sub}>Track & manage your technical expertise</p>
          </div>
          <div style={styles.stats}>
            <div style={styles.stat}><span style={styles.statNum}>{skills.length}</span><span style={styles.statLbl}>Skills</span></div>
            <div style={styles.statDiv} />
            <div style={styles.stat}>
              <span style={styles.statNum}>
                {skills.length ? Math.round(skills.reduce((a, s) => a + s.rating, 0) / skills.length) : 0}%
              </span>
              <span style={styles.statLbl}>Avg</span>
            </div>
          </div>
        </div>

        <div style={styles.layout}>
          {/* DIV 1 — Skills List */}
          <div style={styles.leftPanel}>
            <div style={styles.panelHead}>
              <span style={styles.panelLabel}>Your Skills</span>
              <span style={styles.badge}>{skills.length}</span>
            </div>
            <div style={styles.grid}>
              {skills.length === 0 && (
                <div style={styles.empty}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333355" strokeWidth="1.5" style={{ marginBottom: 8 }}>
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  <span>No skills yet. Add your first one →</span>
                </div>
              )}
              {skills.map((sk) => (
                <SkillCard key={sk.id} skill={sk} onEdit={handleEdit} onDelete={handleDelete} />
              ))}
            </div>
          </div>

          {/* DIV 2 — Input Form */}
          <div style={styles.rightPanel}>
            <div style={styles.formBox}>
              <div style={{ ...styles.formAccent, background: accentColor }} />
              <div style={styles.panelHead}>
                <span style={styles.panelLabel}>{editId !== null ? "Edit Skill" : "Add Skill"}</span>
                {editId !== null && <span style={styles.editBadge}>● Editing</span>}
              </div>

              {/* Image Upload */}
              <div style={styles.field}>
                <label style={styles.label}>Icon / Image <span style={styles.optional}>optional</span></label>
                <label style={styles.uploadBox}>
                  {form.imagePreview ? (
                    <img src={form.imagePreview} alt="preview" style={styles.preview} />
                  ) : (
                    <div style={styles.uploadInner}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#44446A" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="3"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                      <span style={styles.uploadHint}>Click to upload</span>
                    </div>
                  )}
                  <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
                </label>
              </div>

              {/* Name */}
              <div style={styles.field}>
                <label style={styles.label}>Skill Name <span style={styles.req}>*</span></label>
                <div style={styles.selWrap}>
                  <select
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    style={{
                      ...styles.select,
                      borderColor: form.name ? `${accentColor}55` : "#1E1E30",
                      boxShadow: form.name ? `0 0 0 3px ${accentColor}11` : "none",
                    }}
                  >
                    <option value="">Select a skill...</option>
                    {SKILLS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <svg style={styles.chevron} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={form.name ? accentColor : "#555577"} strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>

              {/* Rating */}
              <div style={styles.field}>
                <label style={styles.label}>Proficiency <span style={styles.req}>*</span></label>
                <div style={styles.selWrap}>
                  <select
                    value={form.rating}
                    onChange={(e) => setForm((f) => ({ ...f, rating: e.target.value }))}
                    style={{
                      ...styles.select,
                      borderColor: form.rating ? `${accentColor}55` : "#1E1E30",
                      boxShadow: form.rating ? `0 0 0 3px ${accentColor}11` : "none",
                    }}
                  >
                    <option value="">Select rating...</option>
                    {RATINGS.map((r) => <option key={r} value={r}>{r}%</option>)}
                  </select>
                  <svg style={styles.chevron} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={form.rating ? accentColor : "#555577"} strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
                {form.rating && (
                  <div style={styles.ratingBar}>
                    <div style={{ ...styles.ratingBarFill, width: `${form.rating}%`, background: `linear-gradient(90deg, ${accentColor}77, ${accentColor})` }} />
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div style={styles.actions}>
                {editId !== null && (
                  <button style={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
                )}
                <button
                  style={{
                    ...styles.submitBtn,
                    background: accentColor,
                    boxShadow: `0 6px 24px ${accentColor}33`,
                    flex: editId !== null ? 2 : 1,
                  }}
                  onClick={handleSubmit}
                >
                  {editId !== null ? "Update Skill" : "+ Add Skill"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    background: "#0A0A10",
    color: "#E0E0F0",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    padding: "36px 20px",
  },
  wrapper: { maxWidth: 960, margin: "0 auto" },

  // Header
  header: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 36, flexWrap: "wrap", gap: 16 },
  headerLeft: {},
  tag: {
    display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
    textTransform: "uppercase", color: "#7C6AF7", background: "#7C6AF715",
    border: "1px solid #7C6AF730", borderRadius: 4, padding: "3px 9px", marginBottom: 10,
  },
  title: { fontSize: 46, fontWeight: 900, margin: "0 0 4px", letterSpacing: "-2px", color: "#EDEDF8", lineHeight: 1 },
  dot: { color: "#7C6AF7" },
  sub: { color: "#55556A", fontSize: 14, margin: 0 },
  stats: { display: "flex", alignItems: "center", gap: 20, background: "#111118", border: "1px solid #1A1A28", borderRadius: 12, padding: "12px 20px" },
  stat: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2 },
  statNum: { fontSize: 22, fontWeight: 800, color: "#E0E0F0", letterSpacing: "-0.5px" },
  statLbl: { fontSize: 10, fontWeight: 600, color: "#444460", textTransform: "uppercase", letterSpacing: "0.1em" },
  statDiv: { width: 1, height: 28, background: "#1E1E2E" },

  layout: { display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" },
  panelHead: { display: "flex", alignItems: "center", gap: 8, marginBottom: 14 },
  panelLabel: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.13em", color: "#66668A" },
  badge: { fontSize: 10, fontWeight: 700, color: "#7C6AF7", background: "#7C6AF715", border: "1px solid #7C6AF728", borderRadius: 20, padding: "1px 8px" },
  editBadge: { fontSize: 10, fontWeight: 700, color: "#F59E0B", background: "#F59E0B15", border: "1px solid #F59E0B28", borderRadius: 20, padding: "1px 8px" },

  // Left panel
  leftPanel: { flex: "1 1 320px" },
  grid: { display: "flex", flexDirection: "column", gap: 8 },
  empty: { display: "flex", flexDirection: "column", alignItems: "center", color: "#333355", fontSize: 13, padding: "40px 0", textAlign: "center" },

  // Card
  card: {
    background: "#111118", border: "1px solid #18182A",
    borderRadius: 12, padding: "12px 14px", position: "relative", overflow: "hidden",
  },
  cardStripe: { position: "absolute", left: 0, top: 10, bottom: 10, width: 3, borderRadius: "0 2px 2px 0" },
  cardTop: { display: "flex", alignItems: "center", gap: 10, marginBottom: 8, paddingLeft: 6 },
  avatar: { width: 40, height: 40, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  avatarImg: { width: 24, height: 24, objectFit: "contain" },
  avatarText: { fontSize: 13, fontWeight: 800, letterSpacing: "-0.5px" },
  cardInfo: { flex: 1, minWidth: 0 },
  cardName: { display: "block", fontSize: 14, fontWeight: 700, color: "#DEDEFA", marginBottom: 5 },
  ratingTrack: { height: 3, background: "#1A1A2A", borderRadius: 99, overflow: "hidden", marginBottom: 3 },
  ratingFill: { height: "100%", borderRadius: 99 },
  ratingLabel: { fontSize: 11, fontWeight: 700 },
  cardActions: { display: "flex", gap: 6, paddingLeft: 6 },
  editBtn: {
    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
    fontSize: 12, fontWeight: 600, padding: "7px",
    background: "#18182A", color: "#8888BB", border: "1px solid #22223A",
    borderRadius: 7, cursor: "pointer",
  },
  deleteBtn: {
    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
    fontSize: 12, fontWeight: 600, padding: "7px",
    background: "#FF4D4D0D", color: "#FF6666", border: "1px solid #FF4D4D22",
    borderRadius: 7, cursor: "pointer",
  },

  // Right form panel
  rightPanel: { flex: "0 0 280px" },
  formBox: {
    background: "#111118", border: "1px solid #18182A",
    borderRadius: 14, padding: "22px 20px", position: "sticky", top: 20, overflow: "hidden",
  },
  formAccent: { position: "absolute", top: 0, left: 0, right: 0, height: 2, opacity: 0.8 },

  // Fields
  field: { marginBottom: 18 },
  label: { display: "block", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#66668A", marginBottom: 7 },
  optional: { color: "#333355", textTransform: "none", letterSpacing: 0, fontWeight: 500 },
  req: { color: "#FF6666" },

  uploadBox: {
    display: "flex", alignItems: "center", justifyContent: "center",
    height: 72, border: "1.5px dashed #22223A", borderRadius: 9,
    cursor: "pointer", background: "#0D0D15", overflow: "hidden",
  },
  uploadInner: { display: "flex", flexDirection: "column", alignItems: "center", gap: 5 },
  uploadHint: { fontSize: 11, color: "#333355" },
  preview: { width: "100%", height: "100%", objectFit: "contain", padding: 8 },

  selWrap: { position: "relative" },
  select: {
    width: "100%", appearance: "none", background: "#0D0D15",
    border: "1.5px solid #1E1E30", borderRadius: 8,
    padding: "9px 36px 9px 12px", fontSize: 14, color: "#D8D8EE",
    cursor: "pointer", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  },
  chevron: { position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" },

  ratingBar: { height: 3, background: "#1A1A28", borderRadius: 99, marginTop: 8, overflow: "hidden" },
  ratingBarFill: { height: "100%", borderRadius: 99, transition: "width 0.3s ease" },

  actions: { display: "flex", gap: 8, marginTop: 6 },
  cancelBtn: {
    flex: 1, padding: "10px", background: "#18182A", color: "#8888AA",
    border: "1px solid #22223A", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer",
  },
  submitBtn: {
    padding: "10px", color: "#06060C", border: "none",
    borderRadius: 8, fontSize: 13, fontWeight: 800, cursor: "pointer", letterSpacing: "-0.2px",
  },

  toast: {
    position: "fixed", top: 20, right: 20, zIndex: 1000,
    padding: "9px 16px", borderRadius: 8, border: "1px solid",
    fontSize: 13, fontWeight: 600, backdropFilter: "blur(8px)",
  },
};