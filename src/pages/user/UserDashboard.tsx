import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import UserLayout from './UserLayout';
 

type AnalyticsStateDataCount = {
    location: string;
    _count: any;
}

type AnalyticsLgaDataCount = {
    lga: string;
    _count: any;
}

type Analytics = {
    eoiCount: number
    topStateCount: AnalyticsStateDataCount[]
    topLgaCount: AnalyticsLgaDataCount[]
}

const UserDashboard = () => {


    const [eoiCount, setEoiCount] = useState<number>(0);
    const [topState, setTopState] = useState<AnalyticsStateDataCount[]>();
    const [topLga, setTopLga] = useState<AnalyticsLgaDataCount[]>();

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analytics`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })

                const analyticsData: Analytics = await res.json();

                setEoiCount(analyticsData.eoiCount);
                setTopState(analyticsData.topStateCount);
                setTopLga(analyticsData.topLgaCount);

            } catch (error: any) {
              console.log("error" + error)
            }
        }

        fetchAnalytics();
    }, []);

    return (
        <UserLayout>
           <div className="container px-4">
        <div className="card-analytics">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Card className="max-w-sm shadow-lg overflow-hidden flex items-center justify-between">
              <CardHeader>
                <CardTitle className="font-bold text-xl">EOI</CardTitle>
                <CardDescription className="text-base">
                  Expression of Interest
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <h2 className="text-4xl font-bold">{eoiCount}</h2>
                </div>
              </CardContent>
            </Card>
            <Card className="max-w-sm shadow-lg overflow-hidden flex items-center justify-between">
              <CardHeader>
                <CardTitle className="font-bold text-xl">Top State</CardTitle>
                <CardDescription className="text-base">
                  The state with the most expressed interest
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="justify-center flex flex-col items-center">
                  <h2 className="text-4xl font-bold">{topState ? topState![0]._count['location']: 0}</h2>
                  <p className="capitalize">{topState ? topState[0].location : ""}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="max-w-sm shadow-lg overflow-hidden flex items-center justify-between">
              <CardHeader>
                <CardTitle className="font-bold text-xl">Top Lga</CardTitle>
                <CardDescription className="text-base">
                  The local government with the most expressed interest
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="justify-center flex flex-col items-center">
                  <h2 className="text-4xl font-bold">{topLga ? topLga![0]._count['lga']: 0}</h2>
                  <p className="capitalize">{topLga ? topLga[0].lga : ""}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
           </div>
        </UserLayout>
    );
};

export default UserDashboard;