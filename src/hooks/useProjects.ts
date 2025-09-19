import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Project } from "../types/index";
import toast from "react-hot-toast";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      // console.log("🔍 Fetching projects...");

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      // console.log("📡 Response:", { data, error }); // 👈 ADD THIS

      if (error) throw error;
      setProjects(data || []);
      // console.log("✅ Projects loaded:", data?.length || 0);
    } catch (err) {
      console.error("❌ Error fetching projects:", err); // 👈 ADD THIS
      setError(err instanceof Error ? err.message : "An error occurred");
      toast.error("Failed to fetch projects");
    } finally {
      setLoading(false);
      // console.log("⏹️ Loading finished"); // 👈 ADD THIS
    }
  };
  const createProject = async (
    projectData: Omit<Project, "id" | "created_at" | "updated_at">
  ) => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .insert([projectData])
        .select()
        .single();

      if (error) throw error;
      setProjects((prev) => [data, ...prev]);
      toast.success("Project created successfully");
      return data;
    } catch (err) {
      toast.error("Failed to create project");
      throw err;
    }
  };

  const updateProject = async (id: string, updates: Partial<Project>) => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      setProjects((prev) => prev.map((p) => (p.id === id ? data : p)));
      toast.success("Project updated successfully");
      return data;
    } catch (err) {
      toast.error("Failed to update project");
      throw err;
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const { error } = await supabase.from("projects").delete().eq("id", id);

      if (error) throw error;
      setProjects((prev) => prev.filter((p) => p.id !== id));
      toast.success("Project deleted successfully");
    } catch (err) {
      toast.error("Failed to delete project");
      throw err;
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    loading,
    error,
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
  };
};
