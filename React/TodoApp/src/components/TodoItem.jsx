/**
 * @param {Object} param0
 * @param {string} param0.label 
 * @param {boolean} param0.checked
 * @param {() => void} param0.setChecked
 */
export default function TodoItem({label, checked,setChecked}) {
    return <div className="item">
        <input type="checkbox" value={checked} onChange={setChecked}/>
        <span style={{
          textDecoration : checked === true ? 'line-through' : 'none'  
        }}>{label}</span>
    </div>
}