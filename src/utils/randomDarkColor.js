export const randomDarkColor = () => {
    const color = ['#'];
    for(let i=0; i<3; i+=1) {
      const num = Math.random() * (60 - 20) + 20;
      color.push(num.toString(16).slice(-2).toUpperCase());
    }
    return color.join('');
}