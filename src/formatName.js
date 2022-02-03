export const formatName = (name) => {
  switch (name.toLowerCase()) {
    case 'aksay':
    	return `${name} ☕🎧`;
    case 'arctic':
      return `${name} 🐼`;
    case 'arctos':
      return `${name} 🐨`;
    case 'balabushka':
      return `balabooshka`;
    case 'garvilen':
      return `${name} 🐴`;
    case 'juzja':
    	return `легенда 🛵🗡️`;
    case 'legenda':
    	return `одни легенды 🛵🗡️`;
    case 'garvilen':
      return `${name} 🐴`;
    case 'stagal':
    	return `${name} 🥩`;
    case 'xela':
      return `${name} 👑`;
    case 'легенда':
    	return `одни легенды 🛵🗡️`;
    default:
    	return name;  
  }
};