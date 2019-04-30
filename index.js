   handleBlur = e => {
      e.preventDefault();
      const { name } = e.target;
      if (this.state[name] === '') {
         this.setState(prevState => ({
            error: { ...prevState.error, [name]: true }
         }));
      } else {
         this.setState(prevState => ({
            error: { ...prevState.error, [name]: false }
         }));
      }
   };

//Material-UI TextField
<TextField
   fullWidth
   name="UserName"
   label="Username"
   value={this.state.UserName}
   error={this.state.error.UserName}
   onChange={this.handleChange}
   onBlur={this.handleBlur}
/>
