const database = {
  inventions: [
    {
      name: "Monstrous Abomination",
      description: "I made a friend!",
    },
    {
      name: "Atomic Death Ray",
      description: "My secret weapon to destroy the world",
    },
    {
      name: "Ominous Jacobs Ladder",
      description: "Giant electric arcs in the background",
    },
    {
      name: "Bubbling beakers on bunsen burners (various)",
      description: "...for ambiance",
    },
    {
      name: "Sleep-Free Web Developer",
      description: "Body is 75% Coffee",
    },
  ],
  experiments: [
    {
      name: "It's Alive!!!",
      succeeded: true,
    },
    {
      name: "Tormented research subjects for fun",
      succeeded: true,
    },
    {
      name: "Recorded and compared various maniacal laughs",
      succeeded: true,
    },
    {
      name: "Tried to destroy the monster",
      succeeded: false,
    },
  ],
}

export const getInventions = () => {
  return database.inventions.map((invention) => {
    return { ...invention }
  })
}

export const getExperiments = () =>
  database.experiments.map((experiment) => ({ ...experiment }))
