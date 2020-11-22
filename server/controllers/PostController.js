const Post = require('../models/Post')

class PostController {

    static async index(req, res) {
        try {
            const posts = await Post.find()
            res.json(posts);
        } catch (error) {
            res.json({ message: error});
        }
    }

    static async show(req, res) {
        try {
            const post = await Post.findById(req.params.postId)
            res.json(post);
        } catch (error) {
            res.json({ message: error});
        }
    }
    
    static async store(req, res) {
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        })
    
        try {
            const savedPost = await post.save()
            res.json(savedPost);
        } catch (error) {
            res.json({ message: error});
        }
    }
    
    static async update(req, res) {
        try {
            const post = await Post.updateOne(
                { _id: req.params.postId },
                {
                    $set: {
                        title: req.body.title,
                        description: req.body.description
                    }
                }
            );
    
            const updatePost = await post.save()
            res.json(updatePost);
        } catch (error) {
            res.json({ message: error});
        }
    }
    
    static async delete(req, res) {
        try {
            const post = await Post.updateOne(
                { _id: req.params.postId },
                {
                    $set: {
                        title: req.body.title,
                        description: req.body.description
                    }
                }
            );
    
            const updatePost = await post.save()
            res.json(updatePost);
        } catch (error) {
            res.json({ message: error});
        }
    }
}

module.exports = PostController