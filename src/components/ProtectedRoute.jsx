import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function ProtectedRoute({ children }) {
	const { user, loading } = useAuth();

	if (loading) {
		return <div>Loading...</div>;
	}
	if (!user) {
		return <Navigate to='/login'></Navigate>;
	}

	return <>{children}</>;
}
