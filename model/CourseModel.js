
class CourseModel {
	
	constructor(path='../data/course.js') {
		this.db = require(path);
	}
	
	select(args) { 
		const id = args.id;
		return this.db.filter(course => course.id == id)[0];
	}

	list(args) {
		if (args.topic) {
			const topic = args.topic;
			return this.db.filter(course => course.topic === topic);
		} else {
			return this.db;
		}
	}

	update({id, topic}) {
		this.db.map(course => {
			if (course.id === id) {
				course.topic = topic;
				return course;
			}
		});
		return this.db.filter(course => course.id === id) [0];
	}

	create({payload}) {
		payload = payload || {};
		payload.id = this.db.length + 1;
		payload.title = payload.title || '';
		payload.author = payload.author || '';
		payload.description = payload.description || '';
		payload.topic = payload.topic || '';
		payload.url = payload.url || 'https://my.domain.com';

		this.db.push(payload);
		return payload;
	}

	delete(args) {
		const index = this.db.findIndex(item => item.id === args.id);
		if(index !== -1) {
			const item = this.db[index];
			this.db.splice(index, 1);
			return item;
		}
		return null;
	}
}

const obj = new CourseModel();
obj.Cls = CourseModel;
module.exports = obj;