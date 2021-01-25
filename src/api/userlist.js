import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: 'http://120.53.100.137:8000/userlist',
        method: 'get',
        params: query
    });
};

export const upUserData = query => {
    return request({
        url: 'http://120.53.100.137:8000/userlist',
        method: 'put',
        params: query
    });
};

export const deleteuserData = query => {
    return request({
        url: 'http://120.53.100.137:8000/userlist',
        method: 'delete',
        params: query
    });
};

export const departmentData = query => {
    return request({
        url: 'http://120.53.100.137:8000/department',
        method: 'delete',
        params: query
    });
};