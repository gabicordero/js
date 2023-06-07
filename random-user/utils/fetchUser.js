const URL = 'https://randomuser.me/api/';

const getUser = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    // destructure
    const person = data.results[0];
    const { phone, email } = person;
    // { propiedadOriginal: nuevaVariable }
    const { large: image } = person.picture;
    // { propiedadOriginal: nuevaVariable }
    const { password } = person.login;
    const { first, last } = person.name;
    const { dob: { age } } = person;
    // Se extrae la propiedad dob del objeto person, y luego se extrae la propiedad 
    // age del objeto dob y se asigna a la variable age
    const { street: { number, name } } = person.location;

    return {
        image, phone, email, password, age, street: `${number} ${name}`, name: `${first} ${last}`,
    };
};

export default getUser;