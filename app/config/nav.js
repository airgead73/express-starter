const links = [
  { text: 'projects' },
  { text: 'about' },
  { text: 'contact' }
];

const configureLinks = function(_active = null) {

  const toConfigure = [];

  links.forEach(link => {
    let configuredLink = {};
    configuredLink.text = link.text;
    configuredLink.active = link.text === _active ? true : false;
    toConfigure.push(configuredLink);
  });

  console.log(toConfigure);
  
  return toConfigure;

}

module.exports = { configureLinks };