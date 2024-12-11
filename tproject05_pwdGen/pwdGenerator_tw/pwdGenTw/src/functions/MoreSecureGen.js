export default MoreSecureGen

function MoreSecureGen(isNumAlwd,isCharAlwd,length) {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumAlwd) str += "0123456789";
    if (isCharAlwd) str += "~!@#$%^&*()_+=-`{}|?><,.;'[]";

    const generateRandomChar = () => {
      let randomValue;
      do {
        randomValue = crypto.getRandomValues(new Uint32Array(1))[0];
      } while (randomValue >= (Math.floor(0xFFFFFFFF / str.length) * str.length)); 

      return str[randomValue % str.length];
    };

    for (let i = 0; i < length; i++) {
      pass += generateRandomChar();
    }

    console.log(pass);
    return pass;
  }
