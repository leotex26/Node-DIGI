const { Course, Category } = require("../association/association");
const { Op } = require("sequelize");




const service = {
    getPublished: async ()=>{
        return await Course.findAll({
            where: {
              published: true
            },
            include: {
                model: Category,
                attributes: ["name"]
              }
          });
    },
    getById: async (id)=>{
        return await Course.findByPk(id, {
            include: {
                model: Category,
                attributes: ["id", "name"]
              }
        });
    },
    getByLevel: async (level)=>{
        level = level.trim();
        return await Course.findAll({
            where: {
              level: level
            },
            include: {
                model: Category,
                attributes: ["name"]
              }
          });
    },
    create: async (req) => {
        
        const category = await Category.findByPk(req.body.categoryId);
        if (!category) {
          throw new Error("Catégorie inexistante");
        }
    
        return await Course.create({
          title: req.body.title,
          description: req.body.description,
          duration: req.body.duration,
          level: req.body.level,
          price: req.body.price,
          published: req.body.published ?? false,
          instructor: req.body.instructor,
          CategoryId: req.body.categoryId
        });
      },
    update: async (id, req) => {
        const course = await Course.findByPk(id);
        if (!course) return null;
    
        if (req.categoryId) {
          const category = await Category.findByPk(req.body.categoryId);
          if (!category) {
            throw new Error("Catégorie inexistante");
          }
        }
    
        await course.update({
          title: req.body.title ?? course.title,
          description: req.body.description ?? course.description,
          duration: req.body.duration ?? course.duration,
          level: req.body.level ?? course.level,
          price: req.body.price ?? course.price,
          published: req.body.published ?? course.published,
          instructor: req.body.instructor ?? course.instructor,
          CategoryId: req.body.categoryId ?? course.CategoryId
        });
    
        return course;
      },
    remove: async (id)=>{
        
        await Course.destroy({
            where: { id }
          });
    },
    search: async (keyword)=>{
        return await Course.findAll({
                where: {
                    [Op.or]: [
                        { title: { [Op.like]: "%"+keyword+"%" } },
                        { description: { [Op.like]: "%"+keyword+"%" } }
                      ]
                }
        })
    },
    filter: async (min,max)=>{
        return await Course.findAll({
            where: {
                price: { [Op.between]: [min, max] },
            }
        })
    },
    totalOfCoursesPerCat: async ()=>{
         const results = await sequelize.query(
            "SELECT cat.name as categorie, count(c.id) as number_of_courses FROM courses c JOIN categories cat ON c.categoryId = cat.id GROUP BY categorie",
            {
              type: sequelize.QueryTypes.SELECT
            }
        );
        return results;    
    }
}


module.exports = service;