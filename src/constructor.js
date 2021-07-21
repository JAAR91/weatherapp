function Meassure() {
  this.temp = '';
  this.load = () => {
    this.temp = JSON.parse(localStorage.getItem('temp'));
    if (this.temp === null) {
      this.update(false);
    }
  };
  this.update = (value) => {
    this.temp = value;
    localStorage.setItem('temp', JSON.stringify(this.temp));
  };
}

const tempMeassure = new Meassure();

export default tempMeassure;
