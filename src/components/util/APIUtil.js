
const request = (options) => {
    const headers = new Headers({
     //   'Content-Type': 'application/json',
    })
    
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};
/*first_name, last_name, company, email, message_text*/ 
export function contactRequest(data) {

    return request({
        url: 'https://brifiworks.com/articles/wp-json/contact-form-7/v1/contact-forms/85/feedback',
        method: 'POST',
        body: data
    });
}