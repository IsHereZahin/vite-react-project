const PostFromData = (event) => {
  event.preventDefault();
  alert('From Submitted!');
};

const Form = () => (
  <form onSubmit={PostFromData} style={{ gap: '10px' }}>
    <input type="text" placeholder="Enter text" style={{ padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ccc' }} />
    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px' }}>
      Submit
    </button>
  </form>
);

export default Form;
