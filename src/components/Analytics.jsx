import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Analytics() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'User Queries',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Resolution Rate',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chat Analytics'
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Usage Statistics</h3>
        <Line data={data} options={options} />
      </div>

      <div>
        <h3 className="font-semibold mb-2">Common Queries</h3>
        <div className="space-y-2">
          {['Password reset', 'Account access', 'Billing issues'].map((query) => (
            <div key={query} className="flex justify-between items-center bg-gray-50 p-2 rounded">
              <span>{query}</span>
              <span className="text-sm text-gray-500">32 queries</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Response Time</h3>
        <div className="bg-green-100 text-green-800 p-3 rounded">
          <p className="text-lg font-semibold">1.2s</p>
          <p className="text-sm">Average response time</p>
        </div>
      </div>
    </div>
  );
}
