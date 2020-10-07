const createClosure = dataToHide => {
  return () => {
    console.log(dataToHide);
  };
};

const closure_1 = createClosure('Super secret data!');

closure_1();

document.addEventListener('click', closure_1);
