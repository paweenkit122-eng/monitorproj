const prisma = require("../config/db");

exports.getMonitoring = async (req, res) => {
  try {
    const data = await prisma.monitoring.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 20,
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.createMonitoring = async (req, res) => {
  try {
    const { cpu, ram, disk } = req.body;

    const monitoring = await prisma.monitoring.create({
      data: {
        cpu,
        ram,
        disk,
      },
    });

    res.json(monitoring);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};