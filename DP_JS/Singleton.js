// Only one instance to coordinate actions in the system
// A Singleton is a pattern that help us to use only one object when we need to shared with others, for example:
// With databases clients, AWS services, or whatever object that only need to be instanced one time

const Singleton = {}

export default Singleton;