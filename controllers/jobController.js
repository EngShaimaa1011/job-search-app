const Job = require('../models/Job');

const getAllJobs = async (req, res) => {
  const { title, location, type } = req.query;

  let queryObject = {};

  if (title) {
    queryObject.title = { $regex: title, $options: 'i' };
  }

  if (location) {
    queryObject.location = location;
  }

  if (type) {
    queryObject.type = type;
  }

  const jobs = await Job.find(queryObject);

  res.status(200).json({
    count: jobs.length,
    jobs,
  });
};

const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json(job);
};

module.exports = {
  getAllJobs,
  createJob,
};
