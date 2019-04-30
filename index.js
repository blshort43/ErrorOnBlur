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
