// components/Feed.tsx
import { FC } from 'react';

const Feed: FC = () => {
  return (
    <div className="col-md-6">
      {/* Create Post Section */}
      <div className="card mb-4">
        <div className="card-body">
          <textarea className="form-control" rows={3} placeholder="What's on your mind?"></textarea>
          <button className="btn btn-primary mt-2">Post</button>
        </div>
      </div>

      {/* Posts Section */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">User Name</h5>
          <p className="card-text">This is a sample post content. Lorem ipsum dolor sit amet...</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary btn-sm">Like</button>
            <button className="btn btn-outline-secondary btn-sm">Comment</button>
            <button className="btn btn-outline-success btn-sm">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
