import { SportModel } from '../models/sport.model';

const STATISTICS_MOCK: SportModel[] = [
    {
        name: 'bike',
        years: [
            {
                yearValue: '2018',
                monthStats: [
                    {
                        monthValue: '09',
                        weekStats: [
                            {
                                weekValue: '10',
                                sportActivities: [
                                    {
                                        activityName: 'Morning ride',
                                        geolocations: [
                                            {
                                                lat: 1.90,
                                                lng: 2.88,
                                                alt: 3.44
                                            },
                                            {
                                                lat: 2.90,
                                                lng: 8.88,
                                                alt: 4.44
                                            },
                                            {
                                                lat: 1.78,
                                                lng: 2.90,
                                                alt: 3
                                            },
                                            {
                                                lat: 1.33,
                                                lng: 1.43,
                                                alt: 3.34
                                            }
                                        ],
                                        total: {
                                            distance: 300,
                                            totalSec: 3000,
                                            totalAlt: 300
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
