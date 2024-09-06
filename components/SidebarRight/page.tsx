// components/SidebarRight.tsx
import { FC } from 'react';

const SidebarRight: FC = () => {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Suggested Friends</h5>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              John Doe
              <button className="btn btn-primary btn-sm">Add Friend</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Jane Smith
              <button className="btn btn-primary btn-sm">Add Friend</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
