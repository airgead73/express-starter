const links = [
  { text: 'projects' },
  { text: 'about' },
  { text: 'contact' }
];

const configureLinks = function(text) {

  const toConfigure = [];

  links.forEach(link => {
    let configuredLink = {};
    configuredLink.text = link.text;
    configuredLink.active = link.text === text ? true : false;
    toConfigure.push(configuredLink);
  });
  
  return toConfigure;

}

module.exports = { configureLinks };